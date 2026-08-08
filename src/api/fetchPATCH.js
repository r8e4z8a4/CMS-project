export const fetchPATCH = async (apiType, id,data) => {
    try {
        const response = await fetch(`https://bxtjwcwrpvbbknvjjywj.supabase.co/rest/v1/${apiType}?id=eq.${id}`, {
            method: "PATCH",
            headers: {
                apikey: "sb_publishable_ZyKyCrkVIF4gLf6fS7DDRw_jlBKDbeb",
                Authorization: `Bearer sb_publishable_ZyKyCrkVIF4gLf6fS7DDRw_jlBKDbeb`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
    } catch (error) {
        console.log("test==>", error.message);
    }
};
