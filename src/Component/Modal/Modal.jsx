import React, {  useState } from 'react';
import './Modal.css'
const Modal = ({modal}) => {
    const typho={
        family: 'Roboto',
        size: { unit: 'px', value: 50 },
        weight: '600 (semi-bold)',
        transform: 'Default',
        style: 'Default',
        decoration: 'Default',
        lineHeight: { unit: 'px', value: 0 },
        letterSpacing: { unit: 'px', value: 0 },
        wordSpacing: { unit: 'px', value: 0 },
    }
    const [typhograhy, setTyphograhy] = useState(typho)
  
    const handleChange = (e, key,unit) => {
       
        if(unit){
          
            typhograhy[key][unit]=e.target.value;
        }
        else{
            typhograhy[key]=e.target.value;
        }
         setTyphograhy({...typhograhy})
        
    }
    console.log(typhograhy)

    return (
       
      <>
           {modal && <div className='pop mt-4 	 pt-4 pr-6 pl-2 pb-4 rounded-md relative'>
               <div className='shape w-4 h-4 bg-slate-50 absolute top-[-2%] right-9 '>
                </div>
           
               <div className='flex justify-between'>
                   <div>
                       <h4 className='font-semibold'>Typhography</h4>

                   </div>
                   <div className='flex justify-evenly'>
                       <span className='shadow-xl  rounded-md'><svg xmlns="http:  www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                       </svg>

                       </span>
                       <span className='shadow-xl rounded-md ml-2'>
                           <svg xmlns="http:  www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                           </svg>


                       </span>
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div>
                       <h4 className='font-semibold'>Family</h4>
                
                   </div>

                   <div>

                       <select value={typhograhy.family} onChange={(e) => handleChange(e, 'family')} className="select select-bordered select-sm w-full max-w-xs ml-3">
                           <option value='Roboto'>Roboto</option>
                           <option value='Open Sense'>Open Sense</option>
                           <option value='Tahoma'>Tahoma</option>
                           <option value='Monsorat'>Monsorat</option>

                       </select>
                   </div>

               </div>

               <div className='flex justify-between mt-6'>
                   <div className='flex justify-between'>
                       <span className='font-semibold'>Size</span>
                       <span className='ml-4'><svg xmlns="http:  www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                       </svg>
                       </span>

                   </div>
                   <div>
                       <select  value={typhograhy.size.unit} onChange={(e) => handleChange(e, 'size','unit')} className="select  select-sm w-16 text-xs border-0 ml-3">
                           <option value='px' >px</option>
                           <option value='%'>%</option>
                           <option value='em'>em</option>
                           <option value='rem'>rem</option>
                       </select>
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div>
                       <input  value={typhograhy.size.value} onChange={(e) => handleChange(e, 'size','value')} type="range" min={0} max={100} className='bg-slate-300 slider' />
                   </div>
                   <div>
                       <input type="text"  onChange={(e) => handleChange(e, 'size','value')} value={typhograhy.size.value} className="input input-bordered input-sm w-24 ml-3" />
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div>
                       <h4 className='font-semibold'>Weight</h4>
                       <h4 className='font-semibold mt-6'>Transform</h4>
                       <h4 className='font-semibold mt-6'>Style</h4>
                       <h4 className='font-semibold mt-6'>Decoration</h4>
                   </div>

                   <div>
                       <select value={typhograhy.weight} onChange={(e) => handleChange(e, 'weight')} className="select select-bordered select-sm w-full max-w-xs ml-3" >
                           <option>100 (Thin)</option>
                           <option>200 (Extra Light)</option>
                           <option>300 (Light)</option>
                           <option>400 (Normal)</option>
                       </select>

                       <div className='mt-4'>
                           <select value={typhograhy.transform} onChange={(e) => handleChange(e, 'transform')} className="select select-bordered select-sm w-full max-w-xs ml-3">
                              <option >Default</option>
                               <option >UpperCase</option>
                               <option>lowerCase</option>
                               <option>Capitilize</option>
                               <option>Normal</option>
                           </select>
                       </div>

                       <div className='mt-4'>
                           <select value={typhograhy.style} onChange={(e) => handleChange(e, 'style')} className="select select-bordered select-sm w-full max-w-xs ml-3">
                           <option >Default</option>
                               <option >Normal</option>
                               <option>Italic</option>
                               <option>Oblique</option>
                         
                           </select>
                       </div>

                       <div className='mt-4'>
                           <select value={typhograhy.decoration} onChange={(e) => handleChange(e, 'decoration')} className="select select-bordered select-sm w-full max-w-xs ml-3">
                               <option >Underline</option>
                               <option>Overline</option>
                               <option>Line Through</option>
                               <option>None</option>
                           </select>
                       </div>
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div className='flex justify-between'>
                       <span className='font-semibold'>Line-Height</span>
                       <span className='ml-4'><svg xmlns="http:  www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                       </svg>
                       </span>

                   </div>
                   <div>
                       <select value={typhograhy.lineHeight.unit} onChange={(e) => handleChange(e, 'lineHeight','unit')} className="select  select-sm w-16 text-xs border-0 ml-3">
                           <option value='px'>px</option>
                           <option value='%'>%</option>
                           <option value='em'>em</option>
                           <option value='rem'>rem</option>
                       </select>
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div>
                       <input  onChange={(e) => handleChange(e, 'lineHeight','value')} value={typhograhy.lineHeight.value}  type="range" min={0} max={100} className='bg-slate-300 slider' />
                   </div>
                   <div>
                       <input type="text" onChange={(e) => handleChange(e, 'lineHeight','value')} value={typhograhy.lineHeight.value} className="input input-bordered input-sm w-24 ml-3" />
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div className='flex justify-between'>
                       <span className='font-semibold'>Letter-Spacing</span>
                       <span className='ml-4'><svg xmlns="http:  www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                       </svg>
                       </span>

                   </div>
                   <div>
                       <select value={typhograhy.letterSpacing.unit} onChange={(e) => handleChange(e, 'letterSpacing','unit')} className="select  select-sm w-16 text-xs border-0 ml-3">
                       <option value='px'>px</option>
                           <option value='%'>%</option>
                           <option value='em'>em</option>
                           <option value='rem'>rem</option>
                       </select>
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div>
                       <input onChange={(e) => handleChange(e, 'letterSpacing','value')} value={typhograhy.letterSpacing.value} type="range" min={0} max={100} className='bg-slate-300 slider' />
                   </div>
                   <div>
                       <input onChange={(e) => handleChange(e, 'letterSpacing','value')} value={typhograhy.letterSpacing.value} type="text"  className="input input-bordered input-sm w-24 ml-3" />
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div className='flex justify-between'>
                       <span className='font-semibold'>Word-Spacing</span>
                       <span className='ml-4'><svg xmlns="http:  www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                       </svg>
                       </span>

                   </div>
                   <div>
                       <select value={typhograhy.wordSpacing.unit} onChange={(e) => handleChange(e, 'wordSpacing','unit')} className="select  select-sm w-16 text-xs border-0 ml-3">
                       <option value='px'>px</option>
                           <option value='%'>%</option>
                           <option value='em'>em</option>
                           <option value='rem'>rem</option>
                       </select>
                   </div>
               </div>

               <div className='flex justify-between mt-6'>
                   <div>
                       <input onChange={(e) => handleChange(e, 'wordSpacing','value')} value={typhograhy.wordSpacing.value} type="range" min={0} max={100} className='bg-slate-300 slider' />
                   </div>
                   <div>
                       <input onChange={(e) => handleChange(e, 'wordSpacing','value')} value={typhograhy.wordSpacing.value} type="text"  className="input input-bordered input-sm w-24 ml-3" />
                   </div>
               </div>
               {/* <h3 style={`{  fontFamily:${String(typhograhy.family)} }`}>Hellow world</h3> */}
         </div>
}
         </>
   
    );
};

export default Modal;