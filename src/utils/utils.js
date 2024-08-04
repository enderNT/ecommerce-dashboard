export const clasNameActive = (locationPath, locationPathTarget) => {
    if (locationPath === locationPathTarget) {
        return 'btn bg-[#F8FAFF] text-[#2A4178] text-base font-medium border-none shadow-md mt-11 mx-8'
    }
    return 'btn bg-white text-base font-medium border-none mt-11 mx-8'
}