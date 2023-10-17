import { MenuIcon, ShoppingCardIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

function Header() {

  return <Card className="flex justify-between p-[1.875rem]" >
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
        </SheetHeader>
        <div className="mt-2 flex flex-col gap-3">
          <Button variant="outline" className="w-full justify-start gap-1">
            {/* <LogInIcon /> */}
            Fazer Login
          </Button>
          <Button variant="outline" className="w-full justify-start gap-1">
            {/* <LogInIcon /> */}
            Inicio
          </Button>
          <Button variant="outline" className="w-full justify-start gap-1">
            {/* <LogInIcon /> */}
            Ofertas
          </Button>
          <Button variant="outline" className="w-full justify-start gap-1">
            {/* <LogInIcon /> */}
            Catalagos
          </Button>
          
        </div>
       
      </SheetContent>
    </Sheet>

    <h1 className="text-lg font-semibold ">FSW Store</h1>

    <Button size="icon" variant="outline">
      <CardContent />
    </Button>

  </Card>;
}

export default Header;