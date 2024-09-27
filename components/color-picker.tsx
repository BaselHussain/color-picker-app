"use client";
import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function ColorPickerComponent() {
const [color,setColor]=useState<string>("#000000")


const handleColorChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setColor(e.target.value)
}

const copyToClipboard=()=>{
    navigator.clipboard.writeText(color)
    alert("Copied To Clipboard")
}

return(
    <>
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#38bfc9] to-[#5f3304]">
   <Card className="p-8 w-full max-w-md space-y-8">
    <div className="text-center space-y-2">
<CardTitle> Color Picker</CardTitle>
<CardDescription>Select the color and copy the hex and RGB values</CardDescription>
<div className="space-y-3" >
    <div className="w-full  h-48 mt-4 rounded-xl"style={{backgroundColor:color}}></div>
    <h1 className="text-center font-bold text-2xl">{color}</h1>
    <div className="text-gray-500">
    RGB: {parseInt(color.slice(1, 3), 16)},{" "}
               {parseInt(color.slice(3, 5), 16)},{" "}
               {parseInt(color.slice(5, 7), 16)}
    </div>
<Button
onClick={copyToClipboard}
className="w-full">
    Copy To Clipboard
</Button>

<Input
type="color"
onChange={handleColorChange}
className="w-full h-16 cursor-pointer border-0 rounded-md p-0"
/>
</div>
</div>
   </Card>
   </div>
    </>
)
}


// <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#38bfc9] to-[#5f3304]">
//    <Card className="grid max-w-md w-full p-8 gap-8">
// <div className="text-center space-y-2">
//     <CardTitle>Color Picker</CardTitle>
//     <CardDescription> Select a color and copy the hex and RGB values.</CardDescription>
// </div>
// <div className="grid gap-5">
//     <div className="w-full h-48 rounded-lg border-4 border-gray-200" style={{backgroundColor:color}}/>


// <div className="grid gap-2 text-center"> 
// <div className="text-2xl font-semibold">{color}</div>
// <div className="text-gray-500 dark:text-gray-400">
//               RGB: {parseInt(color.slice(1, 3), 16)},{" "}
//               {parseInt(color.slice(3, 5), 16)},{" "}
//               {parseInt(color.slice(5, 7), 16)}
//             </div>
//             <Button
//               onClick={copyToClipboard}
//               variant="default"
//               className="w-full"
//             >
//               Copy to Clipboard
//             </Button>
// </div>
// <Input
//             type="color"
//             value={color}
//             onChange={handleColorChange}
//             className="w-full h-16 p-0 border-0 rounded-md cursor-pointer"
//           />
//     </div>
//    </Card>
//    </div>