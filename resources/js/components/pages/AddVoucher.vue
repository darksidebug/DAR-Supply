<template>
    <navigation-bar/>
    <div class="flex justify-center mt-8 px-2">
        <div class="w-12/12 lg:w-6/12 border border-gray-200 rounded-lg bg-white">
            <div class="px-7 mt-8">
                <h1 class="pl-2 text-2xl font-bold text-gray-600">Add Voucher</h1>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
                <div class="p-4">
                    <div class="p-1">
                        <label for="dateDelivered" class="font-normal text-gray-600">Date Delivered</label><br/>
                        <input id="dateDelivered" type="date" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded text-gray-600 focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                    </div>
                    <div class="p-1">
                        <label for="dateReceived" class="font-normal text-gray-600">Date Received</label><br/>
                        <input id="dateReceived" type="date" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded text-gray-600 focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                    </div>
                    <div class="p-1">
                        <label for="requestorName" class="font-normal text-gray-600">Requestor Name</label><br/>
                        <input id="requestorName" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded text-gray-600 focus:outline focus:outline-green-400 focus:outline-1" placeholder="Requestor name...">
                    </div>
                    <div class="p-1">
                        <label for="requestorPosition" class="font-normal text-gray-600">Requestor' Position</label><br/>
                        <input id="requestorPosition" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded text-gray-600 focus:outline focus:outline-green-400 focus:outline-1" placeholder="Requestor's position...">
                    </div>
                    <div class="p-1">
                        <label for="payee" class="font-normal text-gray-600">Payee</label><br/>
                        <input id="payee" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded text-gray-600 focus:outline focus:outline-green-400 focus:outline-1" placeholder="Payee...">
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="grid grid-cols-2 p-4">
                        <div class="p-1">
                            <label for="DV_No" class="font-normal text-gray-600">DV No</label><br/>
                            <input id="DV_No" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="DV number...">
                        </div>
                        <div class="p-1">
                            <label for="DV_No_Date" class="block font-normal text-gray-600">Date</label>
                            <input id="DV_No_Date" type="date" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                        </div>
                        <div class="p-1">
                            <label for="PR_No" class="font-normal text-gray-600">PR No</label><br/>
                            <input id="PR_No" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="PR number...">
                        </div>
                        <div class="p-1">
                            <label for="PR_No_Date" class="block font-normal text-gray-600">Date</label>
                            <input id="PR_No_Date" type="date" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                        </div>
                        <div class="p-1">
                            <label for="RESO_No" class="font-normal text-gray-600">RESO No</label><br/>
                            <input id="RESO_No" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="RESO number...">
                        </div>
                        <div class="p-1">
                            <label for="RESO_No_Date" class="block font-normal text-gray-600">Date</label>
                            <input id="RESO_No_Date" type="date" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                        </div>
                        <div class="p-1">
                            <label for="PO_No" class="font-normal text-gray-600">PO No</label><br/>
                            <input id="PO_No" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="PO number...">
                        </div>
                        <div class="p-1">
                            <label for="PO_No_Date" class="block font-normal text-gray-600">Date</label>
                            <input id="PO_No_Date" type="date" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 px-8 pb-4">
                <div class="p-1">
                    <label for="description" class="font-normal text-gray-600">Description</label><br/>
                    <textarea rows="5" id="description" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                    </textarea>
                </div>
                <div class="p-1">
                    <label for="description" class="font-normal text-gray-600">Description</label><br/>
                    <textarea rows="5" id="description" type="text" class="mt-1 py-2 px-3 w-full border border-gray-300 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Select date...">
                    </textarea>
                </div>
            </div>
            <div class="px-8 pb-10">
                <button class="ml-1 mr-1 py-2 px-3 rounded bg-green4 text-white">
                    Proceed
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-4 w-4 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                </button>
                <button class="py-2 px-3 rounded bg-red-600 text-white">
                    Clear
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-4 w-4 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Navigation from "../templates/Navigation.vue"

export default {
    components: {
        "navigation-bar" : Navigation,
    }
}
</script>