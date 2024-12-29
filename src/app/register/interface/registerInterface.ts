export interface MembershipModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (membership: string) => void
}
