import React, { useState } from 'react'

const Section = ({title, description, isVisible, setIsVisible}) =>{
    
    return (
        <div className='bg-slate-100 border border-black m-2 p-2 rounded-md'>
            <h3 className='text-xl font-bold'>{title}</h3>
           
            {isVisible ?
            <button className='px-2 border rounded-sm border-black' onClick={()=>{setIsVisible(false)}}>Hide</button>
            :
            <button className='px-2 border rounded-sm border-black m-2' onClick={()=>{setIsVisible(true)}}>Show</button>
            }
            {isVisible&&<p>{description}</p>}
        </div>
    )
}

const Body = () => {
    const[visibleSection, setVisibleSection] = useState("Box1")
  return (
    <div>
        <Section 
        title={"Box1"}
        description={"The key idea is to wait for a brief period of inactivity after the last user input before triggering the associated function. This helps in optimizing performance and responsiveness, especially in scenarios where the function involves resource-intensive tasks like making API calls.Debouncing involves introducing a delay or a  period before the associated function is actually executed. If another event occurs during this delay, the timer resets. This prevents the function from being called too frequently."}
        isVisible={visibleSection === "Box1"}
        setIsVisible={()=>{
            if(visibleSection==='Box1'){
                setVisibleSection("")
            }
            else{
                setVisibleSection("Box1")
            }
        }}
        />

        <Section 
        title={"Box2"}
        description={"The key idea is to wait for a brief period of inactivity after the last user input before triggering the associated function. This helps in optimizing performance and responsiveness, especially in scenarios where the function involves resource-intensive tasks like making API calls.Debouncing involves introducing a delay or a cooling-off period before the associated function is actually executed. If another event occurs during this delay, the timer resets. This prevents the function from being called too frequently."}
        isVisible={visibleSection === "Box2"}
        setIsVisible={()=>{
            if(visibleSection==='Box2'){
                setVisibleSection("")
            }
            else{
                setVisibleSection("Box2")
            }
        }}
        />
        <Section 
        title={"Box3"}
        description={"The key idea is to wait for a brief period of inactivity after the last user input before triggering the associated function. This helps in optimizing performance and responsiveness, especially in scenarios where the function involves resource-intensive tasks like making API calls.Debouncing involves introducing a delay or a cooling-off period before the associated function is actually executed. If another event occurs during this delay, the timer resets. This prevents the function from being called too frequently."}
        isVisible={visibleSection === "Box3"}
        setIsVisible={()=>{
            if(visibleSection==='Box3'){
                setVisibleSection("")
            }
            else{
                setVisibleSection("Box3")
            }
        }}
        />
    </div>
  )
}

export default Body