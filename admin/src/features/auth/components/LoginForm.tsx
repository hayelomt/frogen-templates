import { Box, Button, Checkbox, Grid, Group, TextInput } from '@mantine/core';
import { useThemedValue } from '../../../core/hooks/useThemedValue';
import { useLoginFormController } from '../lib/hooks/useLoginFormController';

const LoginForm = () => {
  const { submitting, form, login } = useLoginFormController();
  const borderColor = useThemedValue('rgb(230, 215, 215)', 'rgb(9, 88, 94)');

  return (
    <>
      <form onSubmit={form.onSubmit(login)}>
        <Box
          sx={{
            maxWidth: 300,
            border: `1px solid ${borderColor}`,
            borderRadius: 16,
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          }}
          p="lg"
        >
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                withAsterisk
                placeholder="Email"
                label="Email"
                type="email"
                {...form.getInputProps('email')}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <TextInput
                withAsterisk
                placeholder="Password"
                label="Password"
                type="password"
                {...form.getInputProps('password')}
              />
            </Grid.Col>

            <Grid.Col span={12} py="0">
              <Checkbox
                mt="sm"
                label="Remember Me"
                {...form.getInputProps('remember', { type: 'checkbox' })}
              />
            </Grid.Col>
          </Grid>

          <Group position="center" mt="xl">
            <Button type="submit" fullWidth disabled={submitting}>
              Login
            </Button>
          </Group>
        </Box>
      </form>
    </>
  );
};

export default LoginForm;
