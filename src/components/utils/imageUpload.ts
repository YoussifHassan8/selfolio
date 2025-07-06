export const uploadImageToImgBB = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=483cd21c09cbc0fb107c42732ab3e5b0`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data.data?.url) {
      return data.data.url;
    } else {
      throw new Error("No URL in response");
    }
  } catch (err) {
    console.error("Image upload failed:", err);
    throw err;
  }
};
