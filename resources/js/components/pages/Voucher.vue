<template>
    <navigation-bar />
    <div class="flex justify-between items-center mt-7 px-4">
        <div class="flex justify-start items-center">
            <div class="flex justify-start items-center mr-10 space-x-1">
                <select class="py-2 px-2 border border-gray-200 rounded focus:outline focus:outline-green-500 focus:outline-1 text-gray-600" name="" id="">
                    <option value="">Select month</option>
                </select>
                <select class="py-2 px-2 border border-gray-200 rounded focus:outline focus:outline-green-500 focus:outline-1 text-gray-600" name="" id="">
                    <option value="">Select year</option>
                </select>
                <button class="py-2 px-3 rounded bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    Search
                </button>
            </div>
            <button class="py-2 px-3 rounded bg-green4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"/></svg>
                Export Excel
            </button>
        </div>
        <div class="flex justify-end items-center">
            <router-link :to="{ path: '/supply/add-voucher' }">
                <a class="py-2 px-3 rounded bg-gray-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add Voucher
                </a>
            </router-link>
        </div>
    </div>
    <div class="mt-2 px-4">
        <div class="overflow-hidden border border-gray-200 rounded-md">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                <div class="text-xl font-bold text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1 mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <span class="inline-block">Vouchers List</span>
                </div>
                <div class="flex justify-end items-center">
                    <span class="font-medium text-gray-600">Filter: &nbsp;</span>
                    <input type="text" class="py-1 px-3 border border-gray-300 rounded focus:outline focus:outline-green4 focus:outline-1" placeholder="Search name of payee...">
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
                            SL No.
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            IAR No.
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            DIV No.
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Requester
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Payee
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            Total
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            PR No.
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            RESO No.
                        </th>
                        <th scope="col" class="px-6 py-4 text-left">
                            PO No.
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b last:border-b-0 hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <input type="checkbox" class="default:ring-2 ..." />
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            1
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            2020-03-0876
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            D-7844
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            04-26-2020
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            June Vic Cadayona
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            Nobegin Masob
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            Tissue
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            400.00
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            09747
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            77-6012
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                            PO-02217
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Navigation from "../templates/Navigation.vue"
export default {
    components: {
        "navigation-bar" : Navigation
    }
}
</script>