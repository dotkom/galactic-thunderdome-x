import DesktopNavigation from "@components/organisms/Navbar/DesktopNavigation"
import MobileDropdown from "./MobileDropdown"
import { styled } from "@stitches/react"
import useWindow from "./useWindow"
import { createStyles } from "@theme"

const Navbar = () => {
  const [color, shadow] = useWindow()
  return (
    <Container css={{ boxShadow: shadow, backgroundColor: color }}>
      <DesktopNavigation />
      <MobileDropdown />
    </Container>
  )
}

const styles = createStyles({
  container: {
    height: "70px",
    width: "100vw",
    display: "flex",
    zIndex: 100,
    position: "fixed",
    top: 0,
    marginBottom: "70px",
    transition: "background-color 200ms linear",
    margin: 0,
    padding: 0,
  },
})

const Container = styled("div", styles.container)

export default Navbar
