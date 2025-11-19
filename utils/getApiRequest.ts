import { Experience, Certification } from "@/types/types";
export async function getExperience(): Promise<Experience[]> {
    try {
        const response = await fetch(`${process.env.URL_API}/experience`, {
            method: "GET",
            next: { revalidate: 60, tags: ["experience"] },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TOKEN_ACCESS_API}`,
                "x-app-token": process.env.TOKEN_APP!
            }
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching experience data:", error);
        return [];
    }
}


export async function getCertification(): Promise<Certification[]> {
    try {
        const response = await fetch(`${process.env.URL_API}/certification`, {
            method: "GET",
            next: { revalidate: 60, tags: ["certification"] },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TOKEN_ACCESS_API}`,
                "x-app-token": process.env.TOKEN_APP!
            }
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching certification data:", error);
        return [];
    }
}


