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

const TableEmpresa = () => {
  const [pausedItems, setPausedItems] = useState([])
  const [blockedItems, setBlockedItems] = useState([])
  const [, setData] = useState([])

  const handlePause = item => {
    const confirmed = window.confirm(
      `¿Estás seguro que quieres pausar a la Empresa ${item.name}?`,
    )

    if (confirmed) {
      alert(`La Empresa ${item.name} ha sido pausado.`)
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
  }

  const handleActivar = item => {
    item.status = 'active'
    setPausedItems(pausedItems.filter(pausedItem => pausedItem !== item))
    setData(prevData => {
      return prevData.map(dataItem => {
        if (dataItem === item) {
          return { ...dataItem, status: 'active' }
        }
        return dataItem
      })
    })
  }

  const handleBlock = item => {
    alert(`Item ${item.name} bloqueado.`)
    setBlockedItems([...blockedItems, item])
  }

  const handleUnblock = item => {
    setBlockedItems(blockedItems.filter(blockedItem => blockedItem !== item))
    const unBlockButton = document.getElementById(`bloquear-button-${item}`)
    unBlockButton.innerText = 'bloquear'
    const desbloButton = document.getElementById(`desbloquear-button-${item}`)
    desbloButton.style.display = 'none'
  }

  const getStatusStyle = status => {
    if (status === 'active') {
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
