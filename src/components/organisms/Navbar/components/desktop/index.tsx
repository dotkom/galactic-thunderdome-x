import ContentList from "./ContentList";
import ContentListItem from "./ContentListItem";
import DebugLink from "./DebugLink";
import NavigationMenuViewport from "./NavigationMenuViewport";
import StyledLink from "./StyledLink";
import StyledMenu from "./StyledMenu";
import StyledList from "./StyledList";
import StyledIndicatorWithArrow from "./StyledIndicatorWithArrow";
import StyledTriggerWithCaret from "./StyledTrigger";
import StyledContent from "./StyledContent";

export const DesktopList = ContentList;
export const DesktopNavbarContainer = StyledMenu;
export const NavigationMenuContent = StyledContent;
export const NavigationMenuLink = StyledLink;
export const NavigationMenuTrigger = StyledTriggerWithCaret;
export const DropdownIndicator = StyledIndicatorWithArrow;
export const NavigationMenuList = StyledList;
export const DesktopViewport = NavigationMenuViewport;
export const DesktopListItem = ContentListItem;
export const DebugCard = DebugLink;
