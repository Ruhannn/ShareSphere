import { useEffect } from "react"
const useTitle = (title) => {
    useEffect(() => {
        document.title = `ShareSphere | ${title}`;
    }, [title])
}
export default useTitle; 