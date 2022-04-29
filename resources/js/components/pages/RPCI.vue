<template>
    <NavigationBar />
    <div class="flex justify-between items-center mt-7 px-4">
        <div class="flex justify-start items-center">
            <SearchBar />
            <Button :className="'mr-1 py-2 px-3 rounded bg-gray-600 text-white'">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                Print
            </Button>
            <Button :className="'py-2 px-3 rounded bg-green4 text-white'">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"/></svg>
                Export Excel
            </Button>
        </div>
        <div class="flex justify-end items-center">
        </div>
    </div>
    <div class="mt-2 px-4">
        <div class="overflow-hidden border border-gray-200 rounded-md">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                <div class="text-xl font-bold text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" 
                    stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
                    <span class="inline-block">Physical Count of Inventories</span>
                </div>
                <div class="flex justify-end items-center">
                    <span class="font-medium text-gray-600">Filter: &nbsp;</span>
                    <input type="text" class="py-1 px-3 border border-gray-300 rounded focus:outline focus:outline-green4 focus:outline-1" placeholder="Search item...">
                </div>
            </div>
            <table class="min-w-full bg-white">
                <thead class="border-b text-gray-600">
                    <tr>
                        <th scope="col" class="px-6 py-4 text-left">
                            <input type="checkbox" class="mt-0.5 mr-1 default:ring-2 ..." />
                            All
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Desc.
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Stock No.
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Unit
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Value
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Balance
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            On Hand
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Shortage/Over (Qty)
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Shortage/Over (Value)
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Remarks
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b last:border-b-0 hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <input type="checkbox" class="default:ring-2 ..." />
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Navigation from "../templates/Navigation.vue"
import SearchBar from "../templates/SearchBar.vue"
import Button from "../templates/Button.vue"

export default {
    components: {
        "NavigationBar" : Navigation,
        "SearchBar": SearchBar,
        "Button": Button
    }
}
</script>