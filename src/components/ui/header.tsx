import { MenuIcon, ShoppingCardIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

function Header() {

  return <Card className="flex justify-between p-[1.875rem]" >
    <Button size="icon" variant="outline">
      <MenuIcon/>
    </Button>
    <h1 className="text-lg font-semibold ">FSW Store</h1>

    <Button size="icon" variant="outline">
      <CardContent />
    </Button>

  </Card>;
}

export default Header;