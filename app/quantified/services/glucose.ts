import parse from 'date-fns/parse';
import db from 'db';

export async function storeFreestyleCsvReadings(csvUrl: string) {
  try {
    const csvString = await fetch(csvUrl).then((response) => response.text());

    const rows = csvString.split('\n');

    const readings: {
      timestamp: Date;
      reading: number;
    }[] = [];

    for (const row of rows) {
      const isReadingRow = row?.startsWith('FreeStyle LibreLink');

      if (!isReadingRow) {
        continue;
      }

      try {
        const cells = row.split(',');

        const timestampRaw = cells[2];
        const timestampRawSplit = timestampRaw.split(' ');

        const historicReading = parseFloat(cells[3] ?? '0');
        const scanReading = parseFloat(cells[4] ?? '0');

        const reading = scanReading > 0 ? scanReading : historicReading;

        const date = parse(timestampRawSplit[0], 'dd-MM-yyyy', new Date());

        const hour = timestampRawSplit[1].split(':')[0];
        const min = timestampRawSplit[1].split(':')[1];
        date.setHours(parseInt(hour, 10));
        date.setMinutes(parseInt(min, 10));

        readings.push({
          reading,
          timestamp: date,
        });
        // eslint-disable-next-line no-empty
      } catch (_) {}
    }

    const transactions = readings.map((reading) => {
      return db.glucoseReading.upsert({
        where: {
          timestamp: reading.timestamp,
        },
        update: {
          reading: reading.reading,
        },
        create: {
          reading: reading.reading,
          timestamp: reading.timestamp,
        },
      });
    });

    await db.$transaction(transactions);
  } catch (error) {
    console.error(error);
  }
}
