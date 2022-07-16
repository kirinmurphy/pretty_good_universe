import { BrowserView } from "react-device-detect";
import { MobileMenu } from "../Page/MobileMenu";

export function MobileNoticerThing () {

  return (
    <>
      <MobileMenu>
        It's a thing now.
      </MobileMenu>
      <BrowserView>
        Is it a thing now? 
      </BrowserView>
    </>
  );
}