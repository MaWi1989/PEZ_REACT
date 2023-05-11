let token = `8d93638f025900f21a740fb954cb9450`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://pezpezpez.glitch.me/api/all_pez`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://pezpezpez.glitch.me/api/all_pez`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://pezpezpez.glitch.me/api/all_pez/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        console.log(`successfully updated pez with id ${id}`)
    },


    delete: async(id:string) => {
        const response = await fetch(`https://pezpezpez.glitch.me/api/all_pez/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to delete new data on server')
        }

    },
    
    }
