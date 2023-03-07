import { useState } from 'react'

export function useChapters({ initialActiveChapter, chapters, playerRef }) {
  const [currentChapter, setCurrentChapter] = useState(initialActiveChapter)

  const goToChapter = (chapterId: string) => {
    const chapter = chapters.find((p) => p.id === chapterId)
    if (chapterId && chapter) {
      setCurrentChapter(chapter.id)
      playerRef.current?.currentTime(chapter.startAt)
    }
  }

  const getSeekChapter = (currentTime: number) => {
    const chapter = chapters.find(
      (p) => currentTime >= p.startAt && currentTime < p.endAt
    )

    return chapter
  }

  return { currentChapter, setCurrentChapter, goToChapter, getSeekChapter }
}
