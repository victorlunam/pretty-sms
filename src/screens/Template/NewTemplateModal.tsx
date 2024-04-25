import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from "@nextui-org/react"

const triggers = [
  { label: "Paciente Nuevo", value: "new_patient" },
  { label: "Paciente Eliminado", value: "delete_patient" },
]

interface NewTemplateModalProps {
  onOpenChange: () => void
}

const NewTemplateModal = ({ onOpenChange }: NewTemplateModalProps) => {
  return (
    <Modal isOpen onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Nueva Plantilla</ModalHeader>
            <ModalBody>
              <Input label="Título" />
              <Input label="Contenido" placeholder="Bienvenido {{nombre}} ..." />
              <Select
                label="Cuando se envía"
              >
                {triggers.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={onClose}>
                Guardar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default NewTemplateModal