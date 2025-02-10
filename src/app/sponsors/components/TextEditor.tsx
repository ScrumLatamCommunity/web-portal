'use client'
import React, { useEffect, useRef } from 'react'
import 'quill/dist/quill.snow.css'

type TextEditorProps = {
  value: string // Valor del contenido (controlado desde el padre)
  onChange: (value: string) => void // Función para notificar cambios
}

const TextEditor = ({ value, onChange }: TextEditorProps) => {
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
          quillRef.current.root.innerHTML = value
          quillRef.current.on('text-change', () => {
            const content = quillRef.current.root.innerHTML
            onChange(content)
          })
        }
      })
    }
  }, [])

  useEffect(() => {
    if (quillRef.current && quillRef.current.root.innerHTML !== value) {
      quillRef.current.root.innerHTML = value
    }
  }, [value])
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
