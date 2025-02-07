'use client'
import React, { useEffect, useRef } from 'react'
import 'quill/dist/quill.snow.css'

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<any>(null)

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      import('quill').then(({ default: Quill }) => {
        if (!quillRef.current) {
          quillRef.current = new Quill(editorRef.current!, {
            theme: 'snow',
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ header: [1, 2, 3, false] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link']
              ]
            },
            placeholder: 'Texto de Descripción aquí'
          })
        }
      })
    }
  }, [])

  return (
    <div
      ref={editorRef}
      style={{
        backgroundColor: '#D9D9D940',
        height: '215px',
        marginTop: '-10px'
      }}
    ></div>
  )
}

export default TextEditor
