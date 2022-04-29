<template>
    <div class="border border-gray-100 bg-white">
        <nav class="flex justify-between items-center px-4 py-3">
            <div>
                <div class="flex justify-start">
                    <img class="h-14" :src="DARLogo" alt="DAR Logo">
                    <div class="relative ml-1.5 w-64 font-bold text-gray-600">
                        <span class="absolute -top-2 text-xl">Department of</span><br/> 
                        <span class="absolute top-3.5 text-xl">Agrarian Reform</span><br/> 
                        <span class="absolute top-[2.5rem] text-xs font-semibold text-gray-600">Sogod, Southern Leyte</span>
                    </div>
                    <div class="flex justify-start items-center space-x-2">
                        <router-link :to="{path: '/supply/voucher'}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">Vouchers</a>
                        </router-link>
                        <router-link :to="{path: '/supply/rpci'}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">RPCI</a>
                        </router-link>
                        <router-link :to="{path: ''}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">Stock Card</a>
                        </router-link>
                        <router-link :to="{path: ''}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">RIS</a>
                        </router-link>
                        <router-link :to="{path: ''}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">RSMI</a>
                        </router-link>
                        <router-link :to="{path: ''}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">ICS</a>
                        </router-link>
                        <router-link :to="{path: ''}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">Property Card</a>
                        </router-link>
                        <router-link :to="{path: ''}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">PAR</a>
                        </router-link>
                        <router-link :to="{path: ''}">
                            <a class="py-2 px-3 rounded-md font-medium text-gray-600 hover:text-white hover:bg-green4">RPCPPE</a>
                        </router-link>
                    </div>
                </div>
            </div>
            <button class="py-2 px-3 rounded-md text-white bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                stroke-linejoin="round"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"/></svg>
                Sign-Out
            </button>
        </nav>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(process.env.MIX_BASE_URL)
    },
    data() {
        return {
            DARLogo: process.env.MIX_BASE_URL + "/img/dar.png"
            // DARLogo: "http://127.0.0.1:8000/img/dar.png"
        }
    },
}
</script>