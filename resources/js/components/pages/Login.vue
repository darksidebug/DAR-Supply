<template>
    <div class="flex justify-center px-3 sm:px-2 mt-16">
        <div class="py-4 px-2 border border-gray-300 rounded-lg bg-white shadow-xl">
            <div class="flex justify-start px-6 md:px-8 mt-6">
                <div class="mt-3.5 md:mt-0 pr-2 md:p-3 rounded-lg bg-white">
                    <img class="h-[5rem] sm:h-[5.8rem] md:h-[6.8rem] w-auto shadow" :src="DARLogo" alt="DAR Logo">
                </div>
                <h1 class="mt-1 md:mt-1 ml-1 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">Department <br/>of Agrarian <br/> Reform</h1>
            </div>
            <div class="md:pl-8 ml-1.5 pt-1 md:pt-0"><p class="px-4 md:px-1 text-[0.71rem] sm:text-sm md:text-[1rem] text-center md:text-left font-medium">Sogod, Southern Leyte, Philippines, 6606 R-08</p></div>
            <div class="flex justify-center px-0">
                <div class="pt-4 pb-6 px-6 md:px-10 bg-white">
                    <div class="mt-8">
                        <label for="username" class="font-medium text-gray-700">Username</label><br/>
                        <input id="username" type="text" class="mt-1 py-2 px-3 w-[14.5rem] sm:w-[17.5rem] md:w-[21rem] border border-green-600 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Enter username">
                    </div>
                    <div class="mt-2">
                        <label for="password" class="font-medium text-gray-700">Password</label><br/>
                        <input id="password" type="password" class="mt-1 py-2 px-3 w-[14.5rem] sm:w-[17.5rem] md:w-[21rem] border border-green-600 rounded focus:outline focus:outline-green-400 focus:outline-1" placeholder="Enter password">
                    </div>
                    <div class="flex justify-center mt-10 mb-2">
                        <button class="py-2 px-3 rounded border border-green-600 hover:border-green-500 bg-green4 text-white">Sign-in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                DARLogo: "img/dar.png"
            }
        },
    }
</script>