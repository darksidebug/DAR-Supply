<template>
    <navigation-bar />
    <div class="flex justify-between items-center mt-7 px-4">
        <div class="flex justify-start items-center">
            <search-bar />
            <print-button />
            <export-button />
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
import Print from "../templates/PrintButton.vue"
import Export from "../templates/ExportButton.vue"
import AddVoucherButton from "../templates/AddVoucherButton.vue"

export default {
    components: {
        "navigation-bar" : Navigation,
        "search-bar": SearchBar,
        "print-button": Print,
        "export-button" : Export,
        "add-voucher-button": AddVoucherButton
    }
}
</script>