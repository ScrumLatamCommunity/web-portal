declare global {
  interface Window {
    YT: {
      onYouTubeIframeAPIReady: () => void
      Player: { new (container: HTMLElement, options: object): void }
      PlayerState: {
        ENDED: number
      }
      OnStateChangeEvent: {
        data: number
      }
      OnErrorEvent: {
        data: number
      }
    }
  }
}

export {}
