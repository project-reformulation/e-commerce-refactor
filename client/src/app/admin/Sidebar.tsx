"use client"
import { useState } from "react";
import Link from "next/link";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


function Sidebar() {
    const [open, setOpen] =useState<number>(0)

    const handleOpen = (value: any) => {
      setOpen((prevOpen) => (prevOpen === value ? 0 : value));
    };
            
  return (
    <div className="p-0 m-0">
     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-0 shadow-xl shadow-blue-gray-900/5">
  <div className="mb-2 p-4">
    <Typography variant="h5" color="blue-gray">
     
    </Typography>
  </div>
  <List>
    <Accordion
      open={open === 1}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 1}>
      <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5 text-green-500" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal">
            Dashboard
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0">
          <ListItem>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-500" />
            </ListItemPrefix>
            <button className="text-left w-full pl-1" style={{ border: 'none', background: 'none' }}>
              <Link href="/admin/AllTabell">Alluser</Link>
            </button>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-yellow-500" />
            </ListItemPrefix>
            <button className="text-left w-full pl-1" style={{ border: 'none', background: 'none' }}>
              <Link href="/admin/Seller">Seller</Link>
            </button>
          </ListItem>
          <ListItem>
            <div className="flex items-center">
              <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-pink-500" />
              </ListItemPrefix>
              <button className="text-left w-full pl-1" style={{ border: 'none', background: 'none' }}>
                <Link href="/admin/Category">Category</Link>
              </button>
            </div>
          </ListItem>
        </List>
      </AccordionBody>
    </Accordion>
    <Accordion
      open={open === 1}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 1}>
        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5 text-indigo-500" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal">
            E-Commerce
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        
      </AccordionBody>
    </Accordion>

          <ListItem>
  <ListItemPrefix>
    <UserCircleIcon className="h-5 w-5 text-purple-500" />
  </ListItemPrefix>
  
   <Link href={""}>Profile
  
  
  </Link> 
</ListItem>
<List className="p-0">
  <ListItem>
    <ListItemPrefix>
      <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-orange-500" />
    </ListItemPrefix>
    <button onClick={() => {}}>
      User Interface
    </button>
  </ListItem>
  <ListItem>
    <ListItemPrefix>
      <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-500" />
    </ListItemPrefix>
    Seller Interface
  </ListItem>
</List>
<ListItem>
  <ListItemPrefix>
    <Cog6ToothIcon className="h-5 w-5 text-yellow-500" />
  </ListItemPrefix>
  Settings
</ListItem>
<ListItem>
  <ListItemPrefix>
    <PowerIcon className="h-5 w-5 text-red-500" />
  </ListItemPrefix>
  <button onClick={() => {}}>
    Log Out
  </button>
</ListItem>
</List>
      </Card>
    </div>
  )
   
}

export default Sidebar
