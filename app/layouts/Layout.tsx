import { ReactNode } from "react"
import { Box } from "@chakra-ui/layout"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100%" h="100%" bg="black">
      {children}
    </Box>
  )
}

export default Layout
