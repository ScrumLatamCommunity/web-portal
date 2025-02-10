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
                ['bold', 'italic'], // Negrita y cursiva
                [{ list: 'ordered' }, { list: 'bullet' }], // Listas ordenadas y no ordenadas
                ['align'], // Alineación de texto
                ['clean'], // Eliminar formato
              ],
            },
            placeholder: '(100 caracteres máximo).',
          })

          // Limitar a 100 caracteres
          quillRef.current.on('text-change', () => {
            const text = quillRef.current.getText()
            if (text.length > 100) {
              quillRef.current.deleteText(100, text.length)
            }
          })
        }
      })
    }
  }, [])

  return (
    <div
      ref={editorRef}
      style={{
        backgroundColor: '#F5F5F5',
        height: '100px',
        border: '1px solid #082965',
        borderRadius: '5px',
      }}
    ></div>
  )
}

export default TextEditor
