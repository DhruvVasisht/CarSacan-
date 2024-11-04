import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ViewTask = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" margin="4rem 0" textAlign="center">
        View Tasks
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewTask;
