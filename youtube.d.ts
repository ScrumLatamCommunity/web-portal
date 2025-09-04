declare global {
  interface Window {
    YT: {
      onYouTubeIframeAPIReady: () => void
      OnStateChangeEvent: {
        data: number
      }
      OnErrorEvent: {
        data: number
      }
      Player: { new (container: HTMLElement, options: object): void }
      PlayerState: {
        ENDED: number
      }
    }
  }
}

export {}
