"use client"

import Edit from './EditRole/edit'
const page = ({params}:{params:any}) => {
    console.log(params.id)
  return (
    <div>
    < Edit/>
    </div>
  )
}

export default page
