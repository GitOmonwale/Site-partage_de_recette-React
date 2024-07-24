import React from 'react';
 
function Join_us() {
    return <>
        <section className="md:py-20 py-10 mt-10 bg-pink">
 <div className='max-w-500 m-auto flex gap-2 flex-col text-center'>
<h1 className='text-4xl w-60 m-auto'>Deliciousness to your inbox</h1>
<p className='w-72 m-auto'>Enjoy weekly hand picked recipes and recommandation</p>
<div className='w-80 m-auto'>
<input type="text" className='w-2/3 py-2 px-1 outline-none rounded-tl-rounded-tr-sm  rounded-bl-rounded-tr-sm'  placeholder='Email Adress'/>
<button type="button" className='w-1/3 py-2 px-1 bg-orange-400 text-center  rounded-tr-sm  rounded-br-rounded-tr-sm'>JOIN</button>
</div>
<p className='px-4'>By joinning our newsletter you agree to our <a href="" className='border-b-orange-400 border-b'>Terms and condition</a></p>
 </div>
        </section >
    </>
}

export default Join_us