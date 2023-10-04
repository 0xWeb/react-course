import { useCatFact } from "../hooks/useCatFact"
import { useCatImage } from "../hooks/useCatImages"

export function Image() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact: 'cat' })

    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}

export default Image