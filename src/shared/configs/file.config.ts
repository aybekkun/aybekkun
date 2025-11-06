import path from "path"

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads")
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]
export { UPLOAD_DIR, MAX_FILE_SIZE, ALLOWED_TYPES }