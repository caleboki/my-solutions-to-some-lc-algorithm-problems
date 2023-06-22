// https://leetcode.com/problems/meeting-rooms-iii

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */


const mostBooked = (n, meetings) => {
    let roomsMeetingCount=[], roomsSchedule=[]

    //Intially all the rooms are available and meeting count for eacy room is set to 0
    for(let i=0; i<n; i++){
        roomsSchedule[i] = -1
        roomsMeetingCount[i] = 0
    }
    //Sort meeting by their start time
    meetings.sort(function(a,b){return a[0]-b[0]})

    for (let [start, end] of meetings) {
        let earliestRoom = -1
        let earliestTime = Infinity
        let freeRoomFound = false

        for (let i = 0; i < n; i++) {
            //This is the room with the smallest index which is free on or before 
            //start time of the current meeting
            if(roomsSchedule[i] <= start){
                roomsMeetingCount[i]++

                //This room will be avialable at 'end' time of the current meeting.
                roomsSchedule[i]=end
                freeRoomFound=true
                break
            }

            //Let's keep track of the "room with smallest index and being available 
            //at the earliest"
            if(roomsSchedule[i] < earliestTime){
                earliestTime = roomsSchedule[i]
                earliestRoom = i
            }
        }

        //If we couldn't find any meeting room then we will wait for the room with 
        //smallest index being available at the earliest" 

        if(freeRoomFound===false){
            roomsMeetingCount[earliestRoom]++
            //Time to vacant for the room will be increased by the duration of current meeting.
            roomsSchedule[earliestRoom]+=(end-start)
        }
    }

    //Now we have count of meetings for each meeting. We just need to find the room 
    //index with the maximum number of meetings.

    let max=0, maxi = -1

    for(let i=0; i < n; i++){
        if(roomsMeetingCount[i] > max){
            max = roomsMeetingCount[i]
            maxi=i
        }
    }
    return maxi
}



