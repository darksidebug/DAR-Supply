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
                        <RouterLink 
                            :pathTo="'/supply/voucher'"
                            :className="this.$route.fullPath == '/supply/voucher' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            Vouchers
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/rpci'"
                            :className="this.$route.fullPath == '/supply/rpci' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            RPCI
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/stock-card'"
                            :className="this.$route.fullPath == '/supply/stock-card' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            Stock Card
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/ris'"
                            :className="this.$route.fullPath == '/supply/ris' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            RIS
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/rsmi'"
                            :className="this.$route.fullPath == '/supply/rsmi' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            RSMI
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/ics'"
                            :className="this.$route.fullPath == '/supply/ics' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            ICS
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/property-card'"
                            :className="this.$route.fullPath == '/supply/property-card' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            Property Card
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/par'"
                            :className="this.$route.fullPath == '/supply/par' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            PAR
                        </RouterLink>
                        <RouterLink 
                            :pathTo="'/supply/rpcppe'"
                            :className="this.$route.fullPath == '/supply/rpcppe' ? 
                                        'border-b-2 border-green4 rounded-0 hover:rounded-md hover:text-white hover:bg-green4' : 
                                        'hover:border-b-2 hover:border-green4 rounded-md text-gray-600 hover:text-white hover:bg-green4'" >
                            RPCPPE
                        </RouterLink>
                    </div>
                </div>
            </div>
            <Button :className="'py-2 px-3 rounded-md text-white bg-red-600'">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                stroke-linejoin="round"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"/></svg>
                Sign-Out
            </Button>
        </nav>
    </div>
</template>
<script>
import RouterLink from "./RouterLink.vue"
import Button from "./Button.vue"

export default {
    components:{
        "RouterLink":RouterLink,
        "Button": Button
    },
    data() {
        return {
            DARLogo: process.env.MIX_BASE_URL + "/img/dar.png"
            // DARLogo: "http://127.0.0.1:8000/img/dar.png"
        }
    },
}
</script>