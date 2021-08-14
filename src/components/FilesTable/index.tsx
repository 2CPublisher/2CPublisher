import * as React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

type FilesTableProps = {
  files: File[]
}

export default function FilesTable({ files }: FilesTableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 2, marginBottom: 5, maxHeight: 300 }}
    >
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="Files added"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell>Files Added</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map(
            (file: File) =>
              file.name !== "metadata.json" && (
                <TableRow
                  key={file.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {file.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {file.size} bytes
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
