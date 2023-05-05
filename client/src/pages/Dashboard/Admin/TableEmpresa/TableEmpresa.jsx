import React, { useState } from 'react'
import dataE from './dataE.json'
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
  Button,
} from '@tremor/react'
import { CameraIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2'
// @ts-ignore
import imagen1 from '../img/emplitos-16.png'
// @ts-ignore
import emplito from '../img/emplitos-17.png'
// @ts-ignore
import emplito29 from '../img/emplitos-29.png'
// @ts-ignore
import imagenmo from '../img/imagenmo.png'

const TableEmpresa = () => {
  const [pausedItems, setPausedItems] = useState([])
  const [blockedItems, setBlockedItems] = useState([])
  const [, setData] = useState([])

  const handlePause = item => {
    Swal.fire({
      imageUrl: imagen1,
      imageHeight: 200,
      imageWidth: 200,
      imageAlt: 'imagen de emplito',
      title: `¿Estás seguro que quieres pausar a la Empresa ${item.name}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Aceptar`,
      confirmButtonColor: 'skyblue',
      denyButtonText: `Cancelar`,
      denyButtonColor: 'darkcyan',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire(
          `¡La Empresa ${item.name} ha sido pausada con exito!`,
          '',
          'success',
        )
        item.status = 'pausado'
        setData(prevData => {
          return prevData.map(dataItem => {
            if (dataItem === item) {
              return { ...dataItem, status: 'pausado' }
            }
            return dataItem
          })
        })
        setPausedItems([...pausedItems, item])
      }
    })
  }

  const handleActivar = item => {
    Swal.fire({
      imageUrl: emplito,
      imageHeight: 200,
      imageWidth: 200,
      imageAlt: 'imagen de emplito1',
      title: `¿Estás seguro que quieres activar a la Empresa ${item.name}?`,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'skyblue',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: 'darkcyan',
    }).then(result => {
      if (result.isConfirmed) {
        item.status = 'activo'
        setPausedItems(pausedItems.filter(pausedItem => pausedItem !== item))
        setData(prevData => {
          return prevData.map(dataItem => {
            if (dataItem === item) {
              return { ...dataItem, status: 'activo' }
            }
            return dataItem
          })
        })
        Swal.fire('¡Empresa activada!', '', 'success')
      }
    })
  }

  const handleBlock = item => {
    const GLOBAL_BLOCK_MESSAGE =
      '¿Estás seguro que quieres bloquear a la Empresa'
    Swal.fire({
      imageUrl: emplito29,
      imageHeight: 250,
      imageWidth: 200,
      imageAlt: 'imagen de emplito2',
      title: `${GLOBAL_BLOCK_MESSAGE} ${item.name}`,
      showCancelButton: true,
      confirmButtonColor: 'skyblue',
      cancelButtonColor: 'darkcyan',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        item.previousStatus = item.status // Guardar el status anterior
        item.status = 'bloqueado'
        setData(prevData => {
          return prevData.map(dataItem => {
            if (dataItem === item) {
              return { ...dataItem, status: 'bloqueado' }
            }
            return dataItem
          })
        })
        setBlockedItems([...blockedItems, item])
        Swal.fire(
          'Bloqueado',
          `La Empresa ${item.name} ha sido bloqueada con éxito.`,
          'success',
        )
      }
    })
  }

  const handleUnblock = item => {
    Swal.fire({
      imageUrl: imagenmo,
      imageHeight: 200,
      imageWidth: 200,
      imageAlt: 'imagen de emplito1',
      title: `¿Estás seguro que quieres desbloquear  a la Empresa ${item.name}?`,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'skyblue',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: 'darkcyan',
    }).then(result => {
      if (result.isConfirmed) {
        const previousStatus = item.previousStatus || 'inactivo' // Asignar el status anterior o "inactive" si no hay uno anterior
        item.status = previousStatus
        setBlockedItems(blockedItems.filter(blockItem => blockItem !== item))
        setData(prevData => {
          return prevData.map(dataItem => {
            if (dataItem === item) {
              delete item.previousStatus // Eliminar la propiedad previousStatus
              return { ...dataItem, status: previousStatus }
            }
            return dataItem
          })
        })
        Swal.fire('¡Empresa desbloqueada!', '', 'success')
      }
    })
  }

  const getStatusStyle = status => {
    if (status === 'activo') {
      return { color: 'green' }
    } else if (status === 'pausado') {
      return { color: '#1a3587' }
    } else {
      return { color: 'red' }
    }
  }
  return (
    <Card>
      <Title>Lista de Empresas</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Empresa</TableHeaderCell>
            <TableHeaderCell>Rubro</TableHeaderCell>
            <TableHeaderCell>Departamento</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataE.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.Role}</TableCell>
              <TableCell>{item.departement}</TableCell>
              <TableCell>
                <Badge icon={CameraIcon} style={getStatusStyle(item.status)}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  className="ml-5"
                  id={`pausar-button-${item}`}
                  onClick={() => handlePause(item)}
                  disabled={pausedItems.includes(item)}
                  style={{
                    display: pausedItems.includes(item)
                      ? 'none'
                      : 'inline-block',
                  }}
                >
                  Pausar
                </Button>
                <Button
                  className="ml-5 bg-green-500"
                  id={`activar-button-${item}`}
                  onClick={() => handleActivar(item)}
                  style={{
                    display: pausedItems.includes(item)
                      ? 'inline-block'
                      : 'none',
                  }}
                >
                  Activar
                </Button>
                <Button
                  className="ml-5"
                  id={`block-button-${item}`}
                  onClick={() => handleBlock(item)}
                  disabled={blockedItems.includes(item)}
                  style={{
                    display: blockedItems.includes(item)
                      ? 'none'
                      : 'inline-block',
                  }}
                >
                  Bloquear
                </Button>
                <Button
                  className="ml-5 bg-red-400"
                  id={`unblock-button-${item}`}
                  onClick={() => handleUnblock(item)}
                  style={{
                    display: blockedItems.includes(item)
                      ? 'inline-block'
                      : 'none',
                  }}
                >
                  Desbloquear
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default TableEmpresa
