import { StreamChat } from "stream-chat";
const streamChat = StreamChat.getInstance(process.env.STREAM_API_KEY, process.env.STREAM_PRIVATE_API_KEY);
export async function userRoutes(app) {
    app.post("/signup", async (req, res) => {
        const { id, name, image } = req.body;
        if (id === null || id === '' || name === null || name === "") {
            return res.status(400).send();
        }
        const existingUsers = await streamChat.queryUsers({ id });
        if (existingUsers.users.length > 0) {
            return res.status(400).send("User Id already exists");
        }
        await streamChat.upsertUser({ id, name, image });
    });
}
//# sourceMappingURL=user.js.map