import React, { useState } from "react";
import axios from "axios";
import "./RecipeUploadForm.css";

interface FormData {
  class: string;
  subject: string;
  name: string;
  formula: string;
  description: string;
  usage: string;
  example: string;
  status: string;
}

interface RecipeUploadFormProps {
  currentUser?: any;
}

const RecipeUploadForm: React.FC<RecipeUploadFormProps> = ({ currentUser }) => {
  const [formData, setFormData] = useState<FormData>({
    class: "",
    subject: "",
    name: "",
    formula: "",
    description: "",
    usage: "",
    example: "",
    status: "pending",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("Đang gửi công thức...");

    try {
      await axios.post("/api/auth/recipes", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMessage("Công thức đã được gửi đi và đang chờ duyệt");
      setFormData({
        class: "",
        subject: "",
        name: "",
        formula: "",
        description: "",
        usage: "",
        example: "",
        status: "pending",
      });
    } catch (err: any) {
      setMessage("Lỗi khi gửi:" + (err.response?.data?.message || err.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  const messageClass = message.includes("Lỗi")
    ? "recipe-form-message error"
    : "recipe-form-message success";

  return (
    <div className="recipe-form-container">
      <h2 className="recipe-form-header">Đăng Công Thức Mới</h2>

      {message && <div className={messageClass}>{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="recipe-form-grid">
          <div>
            <label className="recipe-form-label">Lớp</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="recipe-form-input"
              required
            >
              <option value="">Chọn lớp</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Lớp {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="recipe-form-label">Môn học</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="recipe-form-input"
              required
            >
              <option value="">Chọn môn học</option>
              {["Toán", "Lý", "Hóa", "Sinh", "Văn", "Anh", "Sử", "Địa"].map(
                (subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <div>
          <label className="recipe-form-label">Tên Công Thức</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="recipe-form-input"
            placeholder="Ví dụ: Công thức tính diện tích hình tròn"
            required
          />
        </div>

        <div>
          <label className="recipe-form-label">Công Thức</label>
          <textarea
            name="formula"
            value={formData.formula}
            onChange={handleChange}
            className="recipe-form-textarea"
            placeholder="Nhập công thức toán học, vật lý, hóa học..."
            required
          />
        </div>

        <div>
          <label className="recipe-form-label">Mô Tả</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="recipe-form-textarea"
            placeholder="Giải thích ý nghĩa công thức, các thành phần..."
            required
          />
        </div>

        <div>
          <label className="recipe-form-label">Cách Dùng</label>
          <textarea
            name="usage"
            value={formData.usage}
            onChange={handleChange}
            className="recipe-form-textarea"
            placeholder="Hướng dẫn cách áp dụng công thức, các bước thực hiện..."
            required
          />
        </div>

        <div>
          <label className="recipe-form-label">Ví Dụ Minh Họa</label>
          <textarea
            name="example"
            value={formData.example}
            onChange={handleChange}
            className="recipe-form-textarea"
            placeholder="Ví dụ cụ thể áp dụng công thức này..."
            required
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`recipe-form-button ${
              isSubmitting ? "disabled" : "primary"
            }`}
          >
            {isSubmitting ? "Đang gửi..." : "Đăng Công Thức"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeUploadForm;
