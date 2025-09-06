import { system } from '@minecraft/server'

system.beforeEvents.startup.subscribe(() => {
  system.run(() => {
    import('./modules/loader')
  })
})
