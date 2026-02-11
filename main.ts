import express from "express";

const PORT = Number(process.env.PORT ?? 3001)

const app = express();
app.use(express.json());
app.get("/health", (_, res) => res.json({ok: true}));

app.get("/user/:id", (req, res) => {
    const userId = Number(req.params.id);

    res.json({
        accountId: userId,
        username: "demo"
    });
});

app.listen(PORT, () => console.log(`auth listening on ${PORT}`));
