import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import api from "../libs/api";

export default function CreateSnippet() {
  const { getToken } = useAuth();

  const [form, setForm] = useState({
    title: "",
    description: "",
    code: "",
    language: "javascript",
    tags: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = await getToken();

      await api.post(
        "/snippets",
        {
          title: form.title,
          description: form.description, // ✅ added
          code: form.code,
          language: form.language,
          tags: form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Snippet created successfully 🎉");
      setForm({
        title: "",
        description: "",
        code: "",
        language: "javascript",
        tags: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create snippet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-white mb-6">
          Create Snippet
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Title</label>
            <input
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              placeholder="JWT Auth Middleware"
              className="w-full rounded-lg bg-slate-800 text-white px-4 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              placeholder="Short explanation of what this snippet does..."
              className="w-full rounded-lg bg-slate-800 text-white px-4 py-2 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Language
            </label>
            <select
              name="language"
              value={form.language}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 text-white px-4 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="plaintext">Plain Text</option>
            </select>
          </div>

          {/* Code */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Code</label>
            <textarea
              name="code"
              required
              rows={8}
              value={form.code}
              onChange={handleChange}
              placeholder="Paste your code here..."
              className="w-full rounded-lg bg-slate-800 text-white px-4 py-2 border border-slate-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Tags</label>
            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="react, auth, jwt"
              className="w-full rounded-lg bg-slate-800 text-white px-4 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Feedback */}
          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && <p className="text-sm text-green-500">{success}</p>}

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white py-2 font-medium transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Create Snippet"}
          </button>
        </form>
      </div>
    </div>
  );
}
