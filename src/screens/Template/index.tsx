import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import NewTemplateModal from "./NewTemplateModal";
import { FiEdit2 } from "@react-icons/all-files/fi/FiEdit2";
import { FiTrash } from "@react-icons/all-files/fi/FiTrash";
import { ReactNode, useCallback } from "react";
import { useRequest } from "ahooks";
import dbController from "../../services/dbController";
import { Template } from "../../types";

// const data = [
//   {
//     id: 1,
//     name: "Bienvenidos",
//     content: "Bienvenido {{nombre}} a la Clínica San Carlos",
//     triggerName: "Paciente Nuevo",
//   },
// ];

const TemplateScreen = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: { documents: data = [] } = {} } = useRequest(() =>
    dbController.findMultipleDocuments<Template>({
      collection: "templates",
    })
  );

  const rendererCell = useCallback(
    (item: Template, columnKey: keyof Template) => {
      const cellValue = item[columnKey];

      const columnMapComponent: { [key in keyof Template]?: ReactNode } & {
        action: ReactNode;
      } = {
        action: (
          <>
            <Button className="mr-2" color="primary" isIconOnly>
              <FiEdit2 />
            </Button>
            <Button color="danger" isIconOnly>
              <FiTrash />
            </Button>
          </>
        ),
      };

      return columnMapComponent[columnKey] ?? cellValue;
    },
    []
  );

  return (
    <>
      <div className="flex justify-end">
        <Button color="primary" onClick={onOpen}>
          Agregar
        </Button>
      </div>

      <Table aria-label="SMS templates" className="h-full [&>div]:h-full">
        <TableHeader>
          <TableColumn key="name">Nombre</TableColumn>
          <TableColumn key="content">Contenido</TableColumn>
          <TableColumn key="trigger">Cuando se envía</TableColumn>
          <TableColumn key="action">Acciones</TableColumn>
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{rendererCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {isOpen && <NewTemplateModal onOpenChange={onOpenChange} />}
    </>
  );
};

export default TemplateScreen;
