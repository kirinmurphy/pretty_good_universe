import { BrowserView, MobileView, isMobile, isMobileOnly } from "react-device-detect";
import { MobileMenu } from "../Page/MobileMenu";

export function MobileNoticerThing () {

  if (isMobile) {
    alert('isMobile YES')
  }
  if (isMobileOnly) {
    alert('mobile only!');
  }

  return (
    <>
      <BrowserView>testtt</BrowserView>
      <MobileView>hlooo</MobileView>
      <MobileMenu>
        It's a thing now.
      </MobileMenu>
    </>
  );
}