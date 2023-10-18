import React from 'react'

export const Product = () => {
    return (
        <div style={{ width: "100%" }} className="chart" draggable="true">
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0 ">
               <div style={{display:'flex'}}>
               <div style={{width:"60%"}}>
                    <h6 class="dark:text-BLACK" style={{fontSize:"20px",fontWeight:"600"}}>Product Sell</h6>
               </div>
                <div>
                    
<section style={{display:"flex",gap:"10px"}}>  
    <div> 
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
    </div>
    </div>
    <div>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>last 30 days</option>
    <option value="US">10 days</option>
    <option value="CA">6 days</option>
 
    </select>
    </div>
</section>


                </div>
               </div>
            </div>
            <div class="flex-auto p-0 pb-2 ">
                <div class="p-0 overflow-x-auto">
                    <table class="items-center justify-center w-full mb-0 align-top border-gray-200 dark:border-white/40 dark:text-white text-slate-500">
                        <thead class="align-bottom">
                            <tr>
                                <th class="py-3 pl-6 pr-6 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xs text-slate-400 opacity-70 whitespace-nowrap tracking-none text-left">Product</th>
                                <th class="py-3 pl-2 pr-6 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xs text-slate-400 opacity-70 whitespace-nowrap tracking-none">Stock</th>
                                <th class="py-3 pl-2 pr-6 font-bold text-center uppercase align-middle border-b border-gray-200 border-solid text-xs text-slate-400 opacity-70 whitespace-nowrap tracking-none">Price</th>
                                <th class="py-3 pl-2 pr-6 font-bold text-center uppercase align-middle border-b border-gray-200 border-solid text-xs text-slate-400 opacity-70 whitespace-nowrap tracking-none">Total sell</th>
                            </tr>
                        </thead>
                        <tbody class="align-top">
                            <tr>
                                <td class="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <div class="flex px-4 py-1">
                                        <div>
                                            <img class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg" alt="product image" />
                                        </div>
                                        <div class="flex flex-col justify-center">
                                            <h6 class="mb-0 leading-normal dark:text-white text-sm">Nike v22 Running</h6>
                                            <p class="mb-0 font-semibold leading-normal text-xs text-slate-400">
                                                <span class="text-lime-500"></span> This is best product
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <p class="mb-0 font-semibold leading-normal text-xs">32 in stock</p>
                                </td>
                                <td class="p-2 text-center align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <p class="mb-0 font-semibold leading-normal text-xs">$9.500</p>
                                </td>
                                <td class="p-2 text-right align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <div class="flex items-center justify-center px-4 py-1">
                                        <p class="mb-0 font-semibold leading-normal text-xs">13</p>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <div class="flex px-4 py-1">
                                        <div>
                                            <img class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-mug.jpg" alt="product image" />
                                        </div>
                                        <div class="flex flex-col justify-center">
                                            <h6 class="mb-0 leading-normal dark:text-white text-sm">Business Kit (Mug + Notebook)</h6>
                                            <p class="mb-0 font-semibold leading-normal text-xs text-slate-400">
                                                <span class="text-lime-500"></span> orders are best
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <p class="mb-0 font-semibold leading-normal text-xs">32 in stock</p>
                                </td>
                                <td class="p-2 text-center align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <p class="mb-0 font-semibold leading-normal text-xs">$45.9</p>
                                </td>
                                <td class="p-2 text-right align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                    <div class="flex items-center justify-center px-4 py-1">
                                        <p class="mb-0 font-semibold leading-normal text-xs">20</p>
                                        <i class="ml-1 leading-normal ni leading-none ni-bold-down text-sm text-lime-500"></i>
                                    </div>
                                </td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
