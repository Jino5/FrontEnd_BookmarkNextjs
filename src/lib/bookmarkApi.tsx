import { BookmarksResponse } from "@/types"
import axios from "axios"

// const API_BASE_URL = 'http://localhost:8080'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const getApiUrl = () => {
    return serverRuntimeConfig.API_BASE_URL || publicRuntimeConfig.API_BASE_URL;
}

export async function getAllBookmarks(page: number, query: string): Promise<BookmarksResponse> {
    // let API_URL = `${API_BASE_URL}/api/bookmarks?page=${page}`;
    let API_URL = `${getApiUrl()}/api/bookmarks?page=${page}`;
    if(query) {
        API_URL += `&query=${query}`
    }
    console.log(`url = ${API_URL}`)
    
    // const res = await axios.get<BookmarksResponse>(`${API_BASE_URL}/api/bookmarks`)
    const res = await axios.get<BookmarksResponse>(API_URL)

    return res.data
}