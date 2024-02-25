"use client"
import 'boxicons'
import Link from 'next/link';
import { toast } from 'react-toastify';
import Sidebar from '../Sidebar';
 axios 
 import { SlTrash } from "react-icons/sl";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { MagnifyingGlassIcon, PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";

  const TABLE_HEAD = ["User", "Email", "Status", "Created", "", ""];
function AllSeller() {
    const [users, setUsers] = useState([]);
    console.log(users,"this is users image ")
  
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/auth/usersByRole/seller`)
          .then((res) => {
            console.log(res.data);
            
            setUsers(res.data);
          })
          .catch((err) => {
            console.log('Error fetching user data:', err);
          });
      }, []);

      const blockUser = (id:number,name:string) => {
        const confirmed = window.confirm(`Are you sure you want to block ${name}?`);
        if (confirmed) {
          axios.delete(`http://localhost:8000/auth/delteuser/${id}`)
            .then((res) => {
                toast.success(`User ${name} blocked successfully`);
              window.location.reload();
            })
            .catch((err) => {
              console.log("Error:", err);
            });
        }
      };


    
  return (
    <div className="flex p-0 m-0">
        <div className="w-1/4 p-0 m-0">
        <Sidebar/>
      </div>
      
      <div className="w-3/4 p-0 m-0" style={{ marginRight: 0 }}>
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
               <div>
                <Typography variant="h5" color="blue-gray">
                  Members list
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all user
                </Typography>
              
          
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
  <Tabs value="all" className="w-full md:w-max">

  </Tabs>

  <div className="w-full md:w-72">
  <Input
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
  className="mt-2 p-2 border border-gray-300 rounded-md flex items-center focus:outline-none focus:border-blue-500 transition-all duration-300"
  placeholder="Search here..."
/>

  </div>
</div>


          </CardHeader> 
          <CardBody className="px-0" >
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
               {users
            .filter((user) => {
              const fullName = `${user.name || ''} ${user.lastname || ''}`.toLowerCase();
              return fullName.includes(searchTerm.toLowerCase());
            }).map((user, index) => {
                  const isLast = index === users.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={user.name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                        <Avatar src={user.image} alt="" style={{ width: '50px', height: '50px' }} className="rounded-full" />

                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {user.name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {user.email}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={user.role}
                            color={user.role === "seller" ? "red" : "green"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                          <Link href={`/admin/Edit/${user.iduser}`}><PencilIcon className="h-4 w-4 text-green-500"  /></Link> 

                          </IconButton>
                        </Tooltip>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Block User">
                          <IconButton variant="text">
                          <SlTrash  name='block' onClick={() => { blockUser(user.iduser,user.name), window.location.reload() }}></SlTrash >
                            
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })} 
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            
          
          </CardFooter>
         
        </Card>
        
       </div>
      </div>
  )
}

export default AllSeller
