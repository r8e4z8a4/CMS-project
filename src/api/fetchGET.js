export const fetchGET = async (handler, setislaoding) => {
    const api = async (params, retryCount = 0) => {
        try {
            const response = await fetch(`https://bxtjwcwrpvbbknvjjywj.supabase.co/rest/v1/${params}`, {
                headers: {
                    apikey: "sb_publishable_ZyKyCrkVIF4gLf6fS7DDRw_jlBKDbeb",
                    Authorization: `Bearer sb_publishable_ZyKyCrkVIF4gLf6fS7DDRw_jlBKDbeb`,
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (retryCount >= 4) {
                console.log(`درخواست ${params} ناموفق بود`);
                throw error;
            }
            const delay = 1000 * 2 ** retryCount;
            await new Promise((resolve) => setTimeout(resolve, delay));
            return api(params, retryCount + 1);
        }
    };
    const [products, members, tickets, comments] = await Promise.allSettled([api("products"), api("users"), api("tickets"), api("comments")]);
    handler({ AllProducts: products.status === "fulfilled" ? products.value : [], AllMembers: members.status === "fulfilled" ? members.value : [], AllTickets: tickets.status === "fulfilled" ? tickets.value : [], AllComments: comments.status === "fulfilled" ? comments.value : [] });
    setislaoding(false);
};
